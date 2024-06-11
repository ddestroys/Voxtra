export interface AddTrackProps {
    isModalOpen: boolean;
    name: string;
    onCancel: () => void;
    onAddTrack: (track: any) => void;
    addedTracks: any
}