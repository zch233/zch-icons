// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BehanceCircleFilledSvg from 'gupo-icons-base/es/asn/BehanceCircleFilled';

export interface BehanceCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconBehanceCircleFilled: BehanceCircleFilledIconType = (props, context) => (
    <Icon name='BehanceCircleFilled' {...{ ...props, ...context.attrs }} icon={BehanceCircleFilledSvg} />
);

IconBehanceCircleFilled.displayName = 'IconBehanceCircleFilled';
IconBehanceCircleFilled.theme = 'filled';
IconBehanceCircleFilled.originName = 'behance-circle';

export default IconBehanceCircleFilled;
