// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DingtalkSquareFilledSvg from 'icon-base/es/asn/DingtalkSquareFilled';

export interface DingtalkSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconDingtalkSquareFilled: DingtalkSquareFilledIconType = (props, context) => (
    <Icon name='DingtalkSquareFilled' {...{ ...props, ...context.attrs }} icon={DingtalkSquareFilledSvg} />
);

IconDingtalkSquareFilled.displayName = 'IconDingtalkSquareFilled';

export default IconDingtalkSquareFilled;
