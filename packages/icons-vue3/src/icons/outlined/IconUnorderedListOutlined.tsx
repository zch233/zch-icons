// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import UnorderedListOutlinedSvg from 'icons-base/es/asn/UnorderedListOutlined';

export interface UnorderedListOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconUnorderedListOutlined: UnorderedListOutlinedIconType = (props, context) => (
    <Icon name='UnorderedListOutlined' {...{ ...props, ...context.attrs }} icon={UnorderedListOutlinedSvg} />
);

IconUnorderedListOutlined.displayName = 'IconUnorderedListOutlined';
IconUnorderedListOutlined.theme = 'outlined';
IconUnorderedListOutlined.originName = 'unordered-list';

export default IconUnorderedListOutlined;
