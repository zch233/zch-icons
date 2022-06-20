// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SelectOutlinedSvg from 'icon-base/es/asn/SelectOutlined';

export interface SelectOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconSelectOutlined: SelectOutlinedIconType = (props, context) => (
    <Icon name='SelectOutlined' {...{ ...props, ...context.attrs }} icon={SelectOutlinedSvg} />
);

IconSelectOutlined.displayName = 'IconSelectOutlined';

export default IconSelectOutlined;
