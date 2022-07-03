// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CodeTwotoneSvg from 'icons-base/es/asn/CodeTwotone';

export interface CodeTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCodeTwotone: CodeTwotoneIconType = (props, context) => <Icon name='CodeTwotone' {...{ ...props, ...context.attrs }} icon={CodeTwotoneSvg} />;

IconCodeTwotone.displayName = 'IconCodeTwotone';
IconCodeTwotone.theme = 'twotone';
IconCodeTwotone.originName = 'code';

export default IconCodeTwotone;
