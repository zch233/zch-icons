// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import WarningTwotoneSvg from 'gupo-icons-base/es/asn/WarningTwotone';

export interface WarningTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconWarningTwotone: WarningTwotoneIconType = (props, context) => (
    <Icon name='WarningTwotone' {...{ ...props, ...context.attrs }} icon={WarningTwotoneSvg} />
);

IconWarningTwotone.displayName = 'IconWarningTwotone';
IconWarningTwotone.theme = 'twotone';
IconWarningTwotone.originName = 'warning';

export default IconWarningTwotone;
