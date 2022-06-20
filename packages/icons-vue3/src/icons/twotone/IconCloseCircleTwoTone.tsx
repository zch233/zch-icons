// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CloseCircleTwoToneSvg from 'icon-base/es/asn/CloseCircleTwoTone';

export interface CloseCircleTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCloseCircleTwoTone: CloseCircleTwoToneIconType = (props, context) => (
    <Icon name='CloseCircleTwoTone' {...{ ...props, ...context.attrs }} icon={CloseCircleTwoToneSvg} />
);

IconCloseCircleTwoTone.displayName = 'IconCloseCircleTwoTone';

export default IconCloseCircleTwoTone;
