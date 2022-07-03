// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DiffTwotoneSvg from 'icons-base/es/asn/DiffTwotone';

export interface DiffTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDiffTwotone: DiffTwotoneIconType = (props, context) => <Icon name='DiffTwotone' {...{ ...props, ...context.attrs }} icon={DiffTwotoneSvg} />;

IconDiffTwotone.displayName = 'IconDiffTwotone';
IconDiffTwotone.theme = 'twotone';
IconDiffTwotone.originName = 'diff';

export default IconDiffTwotone;
