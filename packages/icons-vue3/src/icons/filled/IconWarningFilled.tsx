// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import WarningFilledSvg from 'icons-base/es/asn/WarningFilled';

export interface WarningFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconWarningFilled: WarningFilledIconType = (props, context) => <Icon name='WarningFilled' {...{ ...props, ...context.attrs }} icon={WarningFilledSvg} />;

IconWarningFilled.displayName = 'IconWarningFilled';
IconWarningFilled.theme = 'filled';
IconWarningFilled.originName = 'warning';

export default IconWarningFilled;
