// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ImageColorfulSvg from 'icons-base/es/asn/ImageColorful';

export interface ImageColorfulIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconImageColorful: ImageColorfulIconType = (props, context) => <Icon name='ImageColorful' {...{ ...props, ...context.attrs }} icon={ImageColorfulSvg} />;

IconImageColorful.displayName = 'IconImageColorful';
IconImageColorful.theme = 'colorful';
IconImageColorful.originName = 'image';

export default IconImageColorful;
