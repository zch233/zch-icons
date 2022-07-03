// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ToolTwotoneSvg from 'icons-base/es/asn/ToolTwotone';

export interface ToolTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconToolTwotone: ToolTwotoneIconType = (props, context) => <Icon name='ToolTwotone' {...{ ...props, ...context.attrs }} icon={ToolTwotoneSvg} />;

IconToolTwotone.displayName = 'IconToolTwotone';
IconToolTwotone.theme = 'twotone';
IconToolTwotone.originName = 'tool';

export default IconToolTwotone;
