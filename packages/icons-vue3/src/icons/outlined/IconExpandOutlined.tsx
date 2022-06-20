// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ExpandOutlinedSvg from 'icon-base/es/asn/ExpandOutlined';

export interface ExpandOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconExpandOutlined: ExpandOutlinedIconType = (props, context) => (
    <Icon name='ExpandOutlined' {...{ ...props, ...context.attrs }} icon={ExpandOutlinedSvg} />
);

IconExpandOutlined.displayName = 'IconExpandOutlined';

export default IconExpandOutlined;
