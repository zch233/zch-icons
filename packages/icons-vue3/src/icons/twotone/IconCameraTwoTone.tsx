// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CameraTwoToneSvg from 'icon-base/es/asn/CameraTwoTone';

export interface CameraTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCameraTwoTone: CameraTwoToneIconType = (props, context) => <Icon name='CameraTwoTone' {...{ ...props, ...context.attrs }} icon={CameraTwoToneSvg} />;

IconCameraTwoTone.displayName = 'IconCameraTwoTone';

export default IconCameraTwoTone;
