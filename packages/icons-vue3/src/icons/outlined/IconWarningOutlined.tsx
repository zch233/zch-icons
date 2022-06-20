// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import WarningOutlinedSvg from 'icon-base/es/asn/WarningOutlined';

export interface WarningOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconWarningOutlined: WarningOutlinedIconType = (props, context) => (
    <Icon name='WarningOutlined' {...{ ...props, ...context.attrs }} icon={WarningOutlinedSvg} />
);

IconWarningOutlined.displayName = 'IconWarningOutlined';

export default IconWarningOutlined;
