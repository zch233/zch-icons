// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CiCircleFilledSvg from 'icons-base/es/asn/CiCircleFilled';

export interface CiCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCiCircleFilled: CiCircleFilledIconType = (props, context) => (
    <Icon name='CiCircleFilled' {...{ ...props, ...context.attrs }} icon={CiCircleFilledSvg} />
);

IconCiCircleFilled.displayName = 'IconCiCircleFilled';
IconCiCircleFilled.theme = 'filled';
IconCiCircleFilled.originName = 'ci-circle';

export default IconCiCircleFilled;
