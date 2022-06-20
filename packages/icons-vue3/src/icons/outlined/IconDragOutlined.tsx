// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DragOutlinedSvg from 'icon-base/es/asn/DragOutlined';

export interface DragOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconDragOutlined: DragOutlinedIconType = (props, context) => <Icon name='DragOutlined' {...{ ...props, ...context.attrs }} icon={DragOutlinedSvg} />;

IconDragOutlined.displayName = 'IconDragOutlined';

export default IconDragOutlined;
