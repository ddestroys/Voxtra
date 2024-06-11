import {
    LibraryContent,
    LibraryHeader,
    LibraryHeaderButton,
    LibraryItem, LibraryItemData, LibraryItemDataPrimary, LibraryItemDataSecondary,
    LibraryItemImage,
    LibraryWrapper
} from "./library.styled";

import {Input} from "../../ui-kit/input";
import {Icon} from "../../ui-kit/Icon";
import {MainLayout} from "../layouts/mainLayout";
import Liked from './mocks/Cover.png'
import Energy from './mocks/energy.png'
import Mel from './mocks/mel.png'

export const Library = () => {
    return <MainLayout>
        <LibraryWrapper>
            <LibraryHeader>
                <Input prefixIcon='search' placeholder='Что хотели бы послушать?' />
                <LibraryHeaderButton>
                    <Icon iconName='person'/>
                    Аккаунт
                </LibraryHeaderButton>
            </LibraryHeader>
            <LibraryContent>
                <LibraryItem >
                    <LibraryItemImage src={Liked} alt=''/>
                    <LibraryItemData>
                        <LibraryItemDataPrimary>

                            <Icon iconName='filled_pin' />
                        </LibraryItemDataPrimary>
                        <LibraryItemDataSecondary>
                            Любимые треки
                        </LibraryItemDataSecondary>
                    </LibraryItemData>
                </LibraryItem>
                <LibraryItem >
                    <LibraryItemImage src={Energy} alt=''/>
                    <LibraryItemData>
                        <LibraryItemDataPrimary>

                            <Icon iconName='filled_pin' />
                        </LibraryItemDataPrimary>
                        <LibraryItemDataSecondary>
                            Энергичная музыка
                        </LibraryItemDataSecondary>
                    </LibraryItemData>
                </LibraryItem>
                <LibraryItem >
                    <LibraryItemImage src={Mel} alt=''/>
                    <LibraryItemData>
                        <LibraryItemDataPrimary>

                            <Icon iconName='filled_pin' />
                        </LibraryItemDataPrimary>
                        <LibraryItemDataSecondary>
                            Меланхолия
                        </LibraryItemDataSecondary>
                    </LibraryItemData>
                </LibraryItem>

            </LibraryContent>
        </LibraryWrapper>
    </MainLayout>
}