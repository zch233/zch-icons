// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PicRightOutlinedSvg from 'icon-base/es/asn/PicRightOutlined';

export interface PicRightOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconPicRightOutlined: PicRightOutlinedIconType = (props, context) => (
    <Icon name='PicRightOutlined' {...{ ...props, ...context.attrs }} icon={PicRightOutlinedSvg} />
);

IconPicRightOutlined.displayName = 'IconPicRightOutlined';

export default IconPicRightOutlined;
