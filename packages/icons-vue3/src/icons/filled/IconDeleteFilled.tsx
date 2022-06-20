// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DeleteFilledSvg from 'icon-base/es/asn/DeleteFilled';

export interface DeleteFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconDeleteFilled: DeleteFilledIconType = (props, context) => <Icon name='DeleteFilled' {...{ ...props, ...context.attrs }} icon={DeleteFilledSvg} />;

IconDeleteFilled.displayName = 'IconDeleteFilled';

export default IconDeleteFilled;
