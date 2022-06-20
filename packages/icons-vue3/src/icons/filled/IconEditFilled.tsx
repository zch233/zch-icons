// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import EditFilledSvg from 'icon-base/es/asn/EditFilled';

export interface EditFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconEditFilled: EditFilledIconType = (props, context) => <Icon name='EditFilled' {...{ ...props, ...context.attrs }} icon={EditFilledSvg} />;

IconEditFilled.displayName = 'IconEditFilled';

export default IconEditFilled;
