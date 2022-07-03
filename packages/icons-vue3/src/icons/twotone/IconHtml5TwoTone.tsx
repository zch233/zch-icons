// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import Html5TwotoneSvg from 'icons-base/es/asn/Html5Twotone';

export interface Html5TwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconHtml5Twotone: Html5TwotoneIconType = (props, context) => <Icon name='Html5Twotone' {...{ ...props, ...context.attrs }} icon={Html5TwotoneSvg} />;

IconHtml5Twotone.displayName = 'IconHtml5Twotone';
IconHtml5Twotone.theme = 'twotone';
IconHtml5Twotone.originName = 'html5';

export default IconHtml5Twotone;
