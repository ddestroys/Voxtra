import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {CreateTrackDto} from "./dto/create-track.dto";
import {CreateCommentDto} from "./dto/create-comment.dto";
import {FileService, FileType} from "../file/file.service";
import {Track} from "./track.model";
import {Comment} from "./comment.model";
import {Op} from 'sequelize'
import {getVideoDurationInSeconds} from "get-video-duration";

@Injectable()
export class TrackService {

    constructor(@InjectModel(Track) private trackModel: typeof Track,
                @InjectModel(Comment) private commentModel: typeof Comment,
                private fileService: FileService) {}

    async create(dto: CreateTrackDto, picture, audio): Promise<Track> {
        const audioPath = this.fileService.createFile(FileType.AUDIO, audio)
        const picturePath = this.fileService.createFile(FileType.IMAGE, picture)
        const duration = await getVideoDurationInSeconds(`http://localhost:5000/${audioPath}`)
        const track = await this.trackModel.create({...dto,duration: Math.ceil(duration),liked: false, audio: audioPath, picture: picturePath, approved: false})
        return track
    }

    async patch(dto: CreateTrackDto, trackId) {
        // @ts-ignore
        const new1 = await this.trackModel.update({
            ...dto
        }, {where: {id: trackId}})

        return new1
    }

    async getAll(count = 10, offset = 0): Promise<Track[]> {
        const tracks = await this.trackModel.findAll({offset,limit: count, include: ['author', 'album','track_genre']});
        return tracks;
    }

    async getOne(id: number): Promise<Track> {
        //const track = await this.trackModel.findOne({where: {id}, include: {model: Comment, as: 'comments'}});
        const track = await this.trackModel.findOne({where: {id}, include: 'track_genre'});
        return track
    }

    async delete(id: number): Promise<number> {
        const track = await this.trackModel.destroy({where: {id}});
        return track
    }

    async addComment(dto: CreateCommentDto): Promise<Comment> {
        const track = await this.trackModel.findOne({where: {id:dto.trackId}})
        const comment = await this.commentModel.create({...dto})
        // @ts-ignore
        track.comments.push(comment.id)
        await track.save();
        return comment
    }

    async listen(id: number) {
        const track = await this.trackModel.findOne({where: {id}});
        //track.listens += 1
        track.save()
    }

    async search(query: string): Promise<Track[]> {
        const tracks = await this.trackModel.findAll({
            // @ts-ignore

        where: {
            name : {
                [Op.regexp]: query
            }
            /*: [
                {'name':{[Op.like]:new RegExp(query, 'i')}}
            ]*//*{
                $regex: new RegExp(query, 'i')
            }*/
        }
        })
        return tracks;
    }
}
