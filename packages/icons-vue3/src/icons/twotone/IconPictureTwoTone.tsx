// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PictureTwotoneSvg from 'icons-base/es/asn/PictureTwotone';

export interface PictureTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPictureTwotone: PictureTwotoneIconType = (props, context) => (
    <Icon name='PictureTwotone' {...{ ...props, ...context.attrs }} icon={PictureTwotoneSvg} />
);

IconPictureTwotone.displayName = 'IconPictureTwotone';
IconPictureTwotone.theme = 'twotone';
IconPictureTwotone.originName = 'picture';

export default IconPictureTwotone;
