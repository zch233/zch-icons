// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import Html5FilledSvg from 'icons-base/es/asn/Html5Filled';

export interface Html5FilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconHtml5Filled: Html5FilledIconType = (props, context) => <Icon name='Html5Filled' {...{ ...props, ...context.attrs }} icon={Html5FilledSvg} />;

IconHtml5Filled.displayName = 'IconHtml5Filled';
IconHtml5Filled.theme = 'filled';
IconHtml5Filled.originName = 'html5';

export default IconHtml5Filled;
