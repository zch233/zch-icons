// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CopyrightCircleFilledSvg from 'gupo-icons-base/es/asn/CopyrightCircleFilled';

export interface CopyrightCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCopyrightCircleFilled: CopyrightCircleFilledIconType = (props, context) => (
    <Icon name='CopyrightCircleFilled' {...{ ...props, ...context.attrs }} icon={CopyrightCircleFilledSvg} />
);

IconCopyrightCircleFilled.displayName = 'IconCopyrightCircleFilled';
IconCopyrightCircleFilled.theme = 'filled';
IconCopyrightCircleFilled.originName = 'copyright-circle';

export default IconCopyrightCircleFilled;
