// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CopyTwotoneSvg from 'icons-base/es/asn/CopyTwotone';

export interface CopyTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCopyTwotone: CopyTwotoneIconType = (props, context) => <Icon name='CopyTwotone' {...{ ...props, ...context.attrs }} icon={CopyTwotoneSvg} />;

IconCopyTwotone.displayName = 'IconCopyTwotone';
IconCopyTwotone.theme = 'twotone';
IconCopyTwotone.originName = 'copy';

export default IconCopyTwotone;
