// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CameraTwotoneSvg from 'icons-base/es/asn/CameraTwotone';

export interface CameraTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCameraTwotone: CameraTwotoneIconType = (props, context) => <Icon name='CameraTwotone' {...{ ...props, ...context.attrs }} icon={CameraTwotoneSvg} />;

IconCameraTwotone.displayName = 'IconCameraTwotone';
IconCameraTwotone.theme = 'twotone';
IconCameraTwotone.originName = 'camera';

export default IconCameraTwotone;
