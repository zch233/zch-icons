// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SnippetsOutlinedSvg from 'icon-base/es/asn/SnippetsOutlined';

export interface SnippetsOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconSnippetsOutlined: SnippetsOutlinedIconType = (props, context) => (
    <Icon name='SnippetsOutlined' {...{ ...props, ...context.attrs }} icon={SnippetsOutlinedSvg} />
);

IconSnippetsOutlined.displayName = 'IconSnippetsOutlined';

export default IconSnippetsOutlined;
