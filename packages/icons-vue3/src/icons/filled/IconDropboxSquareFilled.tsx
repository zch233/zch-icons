// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DropboxSquareFilledSvg from 'icon-base/es/asn/DropboxSquareFilled';

export interface DropboxSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconDropboxSquareFilled: DropboxSquareFilledIconType = (props, context) => (
    <Icon name='DropboxSquareFilled' {...{ ...props, ...context.attrs }} icon={DropboxSquareFilledSvg} />
);

IconDropboxSquareFilled.displayName = 'IconDropboxSquareFilled';

export default IconDropboxSquareFilled;
