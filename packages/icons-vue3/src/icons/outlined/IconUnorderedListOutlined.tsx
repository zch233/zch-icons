// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import UnorderedListOutlinedSvg from 'icon-base/es/asn/UnorderedListOutlined';

export interface UnorderedListOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconUnorderedListOutlined: UnorderedListOutlinedIconType = (props, context) => (
    <Icon name='UnorderedListOutlined' {...{ ...props, ...context.attrs }} icon={UnorderedListOutlinedSvg} />
);

IconUnorderedListOutlined.displayName = 'IconUnorderedListOutlined';

export default IconUnorderedListOutlined;
