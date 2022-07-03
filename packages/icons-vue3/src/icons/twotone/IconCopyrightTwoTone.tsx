// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CopyrightTwotoneSvg from 'icons-base/es/asn/CopyrightTwotone';

export interface CopyrightTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCopyrightTwotone: CopyrightTwotoneIconType = (props, context) => (
    <Icon name='CopyrightTwotone' {...{ ...props, ...context.attrs }} icon={CopyrightTwotoneSvg} />
);

IconCopyrightTwotone.displayName = 'IconCopyrightTwotone';
IconCopyrightTwotone.theme = 'twotone';
IconCopyrightTwotone.originName = 'copyright';

export default IconCopyrightTwotone;
