// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SelectOutlinedSvg from 'icons-base/es/asn/SelectOutlined';

export interface SelectOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSelectOutlined: SelectOutlinedIconType = (props, context) => (
    <Icon name='SelectOutlined' {...{ ...props, ...context.attrs }} icon={SelectOutlinedSvg} />
);

IconSelectOutlined.displayName = 'IconSelectOutlined';
IconSelectOutlined.theme = 'outlined';
IconSelectOutlined.originName = 'select';

export default IconSelectOutlined;
