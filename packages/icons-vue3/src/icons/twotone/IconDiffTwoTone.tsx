// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DiffTwoToneSvg from 'icon-base/es/asn/DiffTwoTone';

export interface DiffTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconDiffTwoTone: DiffTwoToneIconType = (props, context) => <Icon name='DiffTwoTone' {...{ ...props, ...context.attrs }} icon={DiffTwoToneSvg} />;

IconDiffTwoTone.displayName = 'IconDiffTwoTone';

export default IconDiffTwoTone;
