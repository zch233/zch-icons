// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CheckSquareTwoToneSvg from 'icon-base/es/asn/CheckSquareTwoTone';

export interface CheckSquareTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCheckSquareTwoTone: CheckSquareTwoToneIconType = (props, context) => (
    <Icon name='CheckSquareTwoTone' {...{ ...props, ...context.attrs }} icon={CheckSquareTwoToneSvg} />
);

IconCheckSquareTwoTone.displayName = 'IconCheckSquareTwoTone';

export default IconCheckSquareTwoTone;
