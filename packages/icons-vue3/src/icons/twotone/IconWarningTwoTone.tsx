// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import WarningTwoToneSvg from 'icon-base/es/asn/WarningTwoTone';

export interface WarningTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconWarningTwoTone: WarningTwoToneIconType = (props, context) => (
    <Icon name='WarningTwoTone' {...{ ...props, ...context.attrs }} icon={WarningTwoToneSvg} />
);

IconWarningTwoTone.displayName = 'IconWarningTwoTone';

export default IconWarningTwoTone;
