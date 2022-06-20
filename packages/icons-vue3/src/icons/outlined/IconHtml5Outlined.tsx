// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import Html5OutlinedSvg from 'icon-base/es/asn/Html5Outlined';

export interface Html5OutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconHtml5Outlined: Html5OutlinedIconType = (props, context) => <Icon name='Html5Outlined' {...{ ...props, ...context.attrs }} icon={Html5OutlinedSvg} />;

IconHtml5Outlined.displayName = 'IconHtml5Outlined';

export default IconHtml5Outlined;
