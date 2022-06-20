// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PicCenterOutlinedSvg from 'icon-base/es/asn/PicCenterOutlined';

export interface PicCenterOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconPicCenterOutlined: PicCenterOutlinedIconType = (props, context) => (
    <Icon name='PicCenterOutlined' {...{ ...props, ...context.attrs }} icon={PicCenterOutlinedSvg} />
);

IconPicCenterOutlined.displayName = 'IconPicCenterOutlined';

export default IconPicCenterOutlined;
