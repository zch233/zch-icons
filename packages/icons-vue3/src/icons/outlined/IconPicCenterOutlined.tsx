// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PicCenterOutlinedSvg from 'gupo-icons-base/es/asn/PicCenterOutlined';

export interface PicCenterOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPicCenterOutlined: PicCenterOutlinedIconType = (props, context) => (
    <Icon name='PicCenterOutlined' {...{ ...props, ...context.attrs }} icon={PicCenterOutlinedSvg} />
);

IconPicCenterOutlined.displayName = 'IconPicCenterOutlined';
IconPicCenterOutlined.theme = 'outlined';
IconPicCenterOutlined.originName = 'pic-center';

export default IconPicCenterOutlined;
