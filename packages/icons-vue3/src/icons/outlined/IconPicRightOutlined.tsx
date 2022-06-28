// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PicRightOutlinedSvg from 'gupo-icons-base/es/asn/PicRightOutlined';

export interface PicRightOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPicRightOutlined: PicRightOutlinedIconType = (props, context) => (
    <Icon name='PicRightOutlined' {...{ ...props, ...context.attrs }} icon={PicRightOutlinedSvg} />
);

IconPicRightOutlined.displayName = 'IconPicRightOutlined';
IconPicRightOutlined.theme = 'outlined';
IconPicRightOutlined.originName = 'pic-right';

export default IconPicRightOutlined;
