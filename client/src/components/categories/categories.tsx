import {MainLayout} from "../layouts/mainLayout";
import {
    CategoriesContent,
    CategoriesHeader,
    CategoriesHeaderButton,
    CategoriesItem, CategoriesItemImage, CategoriesItemTitle,
    CategoriesWrapper
} from "./categories.styled";
import {Input} from "../../ui-kit/input";
import {Icon} from "../../ui-kit/Icon";

export const Categories = () => {
    return <MainLayout>
        <CategoriesWrapper>
            <CategoriesHeader>
                <Input prefixIcon='search' placeholder='Что хотели бы послушать?' />
                <CategoriesHeaderButton>
                    <Icon iconName='person'/>
                    Аккаунт
                </CategoriesHeaderButton>
            </CategoriesHeader>
            <CategoriesContent>
                <CategoriesItem >
                    <CategoriesItemImage></CategoriesItemImage>
                    <CategoriesItemTitle>ttt</CategoriesItemTitle>
                </CategoriesItem>
                <CategoriesItem >
                    <CategoriesItemImage></CategoriesItemImage>
                    <CategoriesItemTitle>ttt</CategoriesItemTitle>
                </CategoriesItem>
                <CategoriesItem >
                    <CategoriesItemImage></CategoriesItemImage>
                    <CategoriesItemTitle>ttt</CategoriesItemTitle>
                </CategoriesItem>
                <CategoriesItem >
                    <CategoriesItemImage></CategoriesItemImage>
                    <CategoriesItemTitle>ttt</CategoriesItemTitle>
                </CategoriesItem>
                <CategoriesItem >
                    <CategoriesItemImage></CategoriesItemImage>
                    <CategoriesItemTitle>ttt</CategoriesItemTitle>
                </CategoriesItem>
                <CategoriesItem >
                    <CategoriesItemImage></CategoriesItemImage>
                    <CategoriesItemTitle>ttt</CategoriesItemTitle>
                </CategoriesItem>
            </CategoriesContent>
        </CategoriesWrapper>
    </MainLayout>
}