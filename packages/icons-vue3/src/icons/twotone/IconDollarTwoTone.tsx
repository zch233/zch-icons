// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DollarTwoToneSvg from 'icon-base/es/asn/DollarTwoTone';

export interface DollarTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconDollarTwoTone: DollarTwoToneIconType = (props, context) => <Icon name='DollarTwoTone' {...{ ...props, ...context.attrs }} icon={DollarTwoToneSvg} />;

IconDollarTwoTone.displayName = 'IconDollarTwoTone';

export default IconDollarTwoTone;
