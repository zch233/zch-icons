// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CodeFilledSvg from 'icons-base/es/asn/CodeFilled';

export interface CodeFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCodeFilled: CodeFilledIconType = (props, context) => <Icon name='CodeFilled' {...{ ...props, ...context.attrs }} icon={CodeFilledSvg} />;

IconCodeFilled.displayName = 'IconCodeFilled';
IconCodeFilled.theme = 'filled';
IconCodeFilled.originName = 'code';

export default IconCodeFilled;
