// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CopyTwoToneSvg from 'icon-base/es/asn/CopyTwoTone';

export interface CopyTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCopyTwoTone: CopyTwoToneIconType = (props, context) => <Icon name='CopyTwoTone' {...{ ...props, ...context.attrs }} icon={CopyTwoToneSvg} />;

IconCopyTwoTone.displayName = 'IconCopyTwoTone';

export default IconCopyTwoTone;
