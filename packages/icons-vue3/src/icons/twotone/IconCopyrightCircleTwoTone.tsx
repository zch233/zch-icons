// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CopyrightCircleTwotoneSvg from 'icons-base/es/asn/CopyrightCircleTwotone';

export interface CopyrightCircleTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCopyrightCircleTwotone: CopyrightCircleTwotoneIconType = (props, context) => (
    <Icon name='CopyrightCircleTwotone' {...{ ...props, ...context.attrs }} icon={CopyrightCircleTwotoneSvg} />
);

IconCopyrightCircleTwotone.displayName = 'IconCopyrightCircleTwotone';
IconCopyrightCircleTwotone.theme = 'twotone';
IconCopyrightCircleTwotone.originName = 'copyright-circle';

export default IconCopyrightCircleTwotone;
