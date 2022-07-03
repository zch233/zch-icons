// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ToolFilledSvg from 'icons-base/es/asn/ToolFilled';

export interface ToolFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconToolFilled: ToolFilledIconType = (props, context) => <Icon name='ToolFilled' {...{ ...props, ...context.attrs }} icon={ToolFilledSvg} />;

IconToolFilled.displayName = 'IconToolFilled';
IconToolFilled.theme = 'filled';
IconToolFilled.originName = 'tool';

export default IconToolFilled;
