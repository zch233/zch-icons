// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DiffFilledSvg from 'icon-base/es/asn/DiffFilled';

export interface DiffFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconDiffFilled: DiffFilledIconType = (props, context) => <Icon name='DiffFilled' {...{ ...props, ...context.attrs }} icon={DiffFilledSvg} />;

IconDiffFilled.displayName = 'IconDiffFilled';

export default IconDiffFilled;
