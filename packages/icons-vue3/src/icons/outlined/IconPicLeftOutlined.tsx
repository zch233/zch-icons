// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PicLeftOutlinedSvg from 'icons-base/es/asn/PicLeftOutlined';

export interface PicLeftOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPicLeftOutlined: PicLeftOutlinedIconType = (props, context) => (
    <Icon name='PicLeftOutlined' {...{ ...props, ...context.attrs }} icon={PicLeftOutlinedSvg} />
);

IconPicLeftOutlined.displayName = 'IconPicLeftOutlined';
IconPicLeftOutlined.theme = 'outlined';
IconPicLeftOutlined.originName = 'pic-left';

export default IconPicLeftOutlined;
