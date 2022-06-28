// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import IeCircleFilledSvg from 'gupo-icons-base/es/asn/IeCircleFilled';

export interface IeCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconIeCircleFilled: IeCircleFilledIconType = (props, context) => (
    <Icon name='IeCircleFilled' {...{ ...props, ...context.attrs }} icon={IeCircleFilledSvg} />
);

IconIeCircleFilled.displayName = 'IconIeCircleFilled';
IconIeCircleFilled.theme = 'filled';
IconIeCircleFilled.originName = 'ie-circle';

export default IconIeCircleFilled;
