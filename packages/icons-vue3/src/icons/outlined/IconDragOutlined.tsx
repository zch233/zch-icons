// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DragOutlinedSvg from 'gupo-icons-base/es/asn/DragOutlined';

export interface DragOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDragOutlined: DragOutlinedIconType = (props, context) => <Icon name='DragOutlined' {...{ ...props, ...context.attrs }} icon={DragOutlinedSvg} />;

IconDragOutlined.displayName = 'IconDragOutlined';
IconDragOutlined.theme = 'outlined';
IconDragOutlined.originName = 'drag';

export default IconDragOutlined;
