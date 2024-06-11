import {ProfileLayout} from "../layouts/profileLayout";
import {
    SubscriptionsContent,
    SubscriptionsContentBlock,
    SubscriptionsContentRow,
    SubscriptionsContentRowTitle,
    SubscriptionsDescription,
    SubscriptionsDescriptionName,
    SubscriptionsDescriptionRow, SubscriptionsDescriptionRowColumn, SubscriptionsDescriptionRowName,
    SubscriptionsDescriptionTitle,
    SubscriptionsDescriptionWrapper,
    SubscriptionsHeader,
    SubscriptionsHeaderButton,
    SubscriptionsHeaderTitle,
    SubscriptionsWrapper
} from "./subscriptions.styled";
import {Icon} from "../../ui-kit/Icon";
import {Button} from "../../ui-kit/button";

export const Subscriptions = () => {
    return <ProfileLayout>
        <SubscriptionsWrapper>
            <SubscriptionsHeader>
                <SubscriptionsHeaderTitle>
                    Подписки
                </SubscriptionsHeaderTitle>
                <SubscriptionsHeaderButton>
                    <Icon iconName='home'/>
                    На главную
                </SubscriptionsHeaderButton>
            </SubscriptionsHeader>
            <SubscriptionsContent>
                <SubscriptionsContentRow>
                    <SubscriptionsContentRowTitle>Мой план подписки</SubscriptionsContentRowTitle>
                    <SubscriptionsContentBlock>
                        <SubscriptionsContentRowTitle>Бесплатная</SubscriptionsContentRowTitle>
                        <Button buttonType='primary'>Сменить план подписки</Button>
                    </SubscriptionsContentBlock>

                </SubscriptionsContentRow>
                <SubscriptionsContentRow>
                    <SubscriptionsContentRowTitle>Прикрепленная карта</SubscriptionsContentRowTitle>
                    <SubscriptionsContentBlock>
                        <SubscriptionsContentRowTitle>∙∙∙∙ 4563</SubscriptionsContentRowTitle>
                        <Button buttonType='secondary'>Изменить карту</Button>
                    </SubscriptionsContentBlock>
                </SubscriptionsContentRow>
            </SubscriptionsContent>
            <SubscriptionsDescriptionWrapper>
                <SubscriptionsDescriptionTitle>
                    Виды подписок
                </SubscriptionsDescriptionTitle>
                <SubscriptionsDescription>
                    <SubscriptionsDescriptionRow>
                        <SubscriptionsDescriptionRowName>Функции</SubscriptionsDescriptionRowName>
                        <SubscriptionsDescriptionRowColumn>Бесплатная</SubscriptionsDescriptionRowColumn>
                        <SubscriptionsDescriptionRowColumn>Premium</SubscriptionsDescriptionRowColumn>
                    </SubscriptionsDescriptionRow>
                    <SubscriptionsDescriptionRow>
                        <SubscriptionsDescriptionRowName>Стоимость</SubscriptionsDescriptionRowName>
                        <SubscriptionsDescriptionRowColumn>3333</SubscriptionsDescriptionRowColumn>
                        <SubscriptionsDescriptionRowColumn>3333</SubscriptionsDescriptionRowColumn>
                    </SubscriptionsDescriptionRow>
                    <SubscriptionsDescriptionRow>
                        <SubscriptionsDescriptionRowName>3333</SubscriptionsDescriptionRowName>
                        <SubscriptionsDescriptionRowColumn>3333</SubscriptionsDescriptionRowColumn>
                        <SubscriptionsDescriptionRowColumn>3333</SubscriptionsDescriptionRowColumn>
                    </SubscriptionsDescriptionRow>
                    <SubscriptionsDescriptionRow>
                        <SubscriptionsDescriptionRowName>123</SubscriptionsDescriptionRowName>
                        <SubscriptionsDescriptionRowColumn>3333</SubscriptionsDescriptionRowColumn>
                        <SubscriptionsDescriptionRowColumn>3333</SubscriptionsDescriptionRowColumn>
                    </SubscriptionsDescriptionRow>
                    <SubscriptionsDescriptionRow>
                        <SubscriptionsDescriptionRowName>123</SubscriptionsDescriptionRowName>
                        <SubscriptionsDescriptionRowColumn>3333</SubscriptionsDescriptionRowColumn>
                        <SubscriptionsDescriptionRowColumn>3333</SubscriptionsDescriptionRowColumn>
                    </SubscriptionsDescriptionRow>
                </SubscriptionsDescription>
            </SubscriptionsDescriptionWrapper>
        </SubscriptionsWrapper>
    </ProfileLayout>
}