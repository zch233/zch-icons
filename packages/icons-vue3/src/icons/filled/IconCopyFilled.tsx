// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CopyFilledSvg from 'icons-base/es/asn/CopyFilled';

export interface CopyFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCopyFilled: CopyFilledIconType = (props, context) => <Icon name='CopyFilled' {...{ ...props, ...context.attrs }} icon={CopyFilledSvg} />;

IconCopyFilled.displayName = 'IconCopyFilled';
IconCopyFilled.theme = 'filled';
IconCopyFilled.originName = 'copy';

export default IconCopyFilled;
