// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PictureOutlinedSvg from 'icon-base/es/asn/PictureOutlined';

export interface PictureOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconPictureOutlined: PictureOutlinedIconType = (props, context) => (
    <Icon name='PictureOutlined' {...{ ...props, ...context.attrs }} icon={PictureOutlinedSvg} />
);

IconPictureOutlined.displayName = 'IconPictureOutlined';

export default IconPictureOutlined;
