// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import EyeFilledSvg from 'gupo-icons-base/es/asn/EyeFilled';

export interface EyeFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconEyeFilled: EyeFilledIconType = (props, context) => <Icon name='EyeFilled' {...{ ...props, ...context.attrs }} icon={EyeFilledSvg} />;

IconEyeFilled.displayName = 'IconEyeFilled';
IconEyeFilled.theme = 'filled';
IconEyeFilled.originName = 'eye';

export default IconEyeFilled;
