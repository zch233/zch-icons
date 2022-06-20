// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PicLeftOutlinedSvg from 'icon-base/es/asn/PicLeftOutlined';

export interface PicLeftOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconPicLeftOutlined: PicLeftOutlinedIconType = (props, context) => (
    <Icon name='PicLeftOutlined' {...{ ...props, ...context.attrs }} icon={PicLeftOutlinedSvg} />
);

IconPicLeftOutlined.displayName = 'IconPicLeftOutlined';

export default IconPicLeftOutlined;
